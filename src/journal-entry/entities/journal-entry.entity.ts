import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Account } from '../../account/entities/account.entity';

@Entity('journal_entries') // Nombre de la tabla en la base de datos
export class JournalEntry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ length: 255 })
  description: string;

  @ManyToOne(() => Account)
  account: Account;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  debit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  credit: number;
}
