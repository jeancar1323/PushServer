import { Injectable } from '@nestjs/common';
import { Device } from 'src/model/device.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceDTO } from 'src/model/device.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device) private readonly repo: Repository<Device>,
  ) {}
  getMsg(): string {
    return 'Hei Jude';
  }

  async createDevice(device: DeviceDTO): Promise<Device> {
    return this.repo.save(device);
  }

  async getAllDevice(): Promise<Device[]> {
    return this.repo.find();
  }

  async getDevice(id: string): Promise<DeviceDTO> {
    return this.repo.findOne(id);
  }
}
