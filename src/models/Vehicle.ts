import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { Quotation } from './Quotation';

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
  public make!: string;

  @ForeignKey(() => Customer)
  public customerId!: string;

  @HasMany(() => Invoice)
  public invoices!: Invoice[];

  @HasMany(() => Quotation)
  public quotations!: Quotation[];
}

export { Vehicle };
