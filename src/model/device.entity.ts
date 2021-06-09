import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity()
export class Device {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  creatAt: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt: string;
}
