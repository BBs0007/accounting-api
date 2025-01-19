import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('accounts') // Nombre de la tabla en la base de datos
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, length: 20 })
  code: string;

  @Column({ length: 100 })
  name: string;

  @Column()
  type: 'asset' | 'liability' | 'equity' | 'revenue' | 'expense' | 'cost';

  @ManyToOne(() => Account, (account) => account.id, { nullable: true })
  parentAccount: Account;

  @Column()
  currencyId: string;
}
