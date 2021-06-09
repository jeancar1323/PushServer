import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { Device } from 'src/model/device.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Device])],
  providers: [DeviceService],
  controllers: [DeviceController],
})
export class DeviceModule {}
