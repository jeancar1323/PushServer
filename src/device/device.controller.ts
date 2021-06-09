import { DeviceDTO } from './../model/device.dto';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { DeviceService } from './device.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { Device } from 'src/model/device.entity';
import * as admin from 'firebase-admin';
import { title } from 'process';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get('/')
  getMsg(): string {
    return this.deviceService.getMsg();
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/create')
  async create(@Body() device: DeviceDTO): Promise<Device> {
    return this.deviceService.createDevice(device);
  }

  @Get('/all')
  async getAll(): Promise<Device[]> {
    return this.deviceService.getAllDevice();
  }

  @Get('/sendMsg/:id/:title/:msg')
  async sendMsg(
    @Param('id') id: string,
    @Param('title') title: string,
    @Param('msg') msg: string,
  ): Promise<string> {
    const device = await this.deviceService.getDevice(id);
    if (device) {
      await admin
        .messaging()
        .sendToDevice(device.code, {
          data: {},
          notification: { title, body: msg },
        })
        .then(() => {
          return 'Mensagem enviada com sucesso';
        })
        .catch(() => {
          return 'Mensagem não enviada com sucesso';
        });
    } else return 'Dispositivo não encontrado';
  }
}
