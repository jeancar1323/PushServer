import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class DeviceDTO implements Readonly<DeviceDTO> {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
