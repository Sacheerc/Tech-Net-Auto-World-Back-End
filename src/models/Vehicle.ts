import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { ServiceRecord } from './ServiceRecord';

//Defining Vehicle model
@Table({ tableName: 'vehicle' })
class Vehicle extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
  })
  public vehicleNo!: string;

  @Column(DataType.STRING)
  public model!: string;

  @Column(DataType.STRING)
  public color!: string;

  @Column(DataType.STRING)
  public ownerAddress!: string;

  @Column(DataType.STRING)
  public ownerNIC!: string;

  @Column(DataType.STRING)
  public ownerContact!: string;

  @Column(DataType.STRING)
  public ownerEmail!: string;

  @HasMany(() => ServiceRecord)
  serviceRecords!: ServiceRecord[];
}

export { Vehicle };
