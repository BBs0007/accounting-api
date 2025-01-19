import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalEntry } from './entities/journal-entry.entity';
import { JournalEntryService } from './journal-entry.service';
import { JournalEntryController } from './journal-entry.controller';

@Module({
  imports: [TypeOrmModule.forFeature([JournalEntry])],
  providers: [JournalEntryService],
  controllers: [JournalEntryController],
})
export class JournalEntryModule {}
