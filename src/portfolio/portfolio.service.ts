import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  jobs = ['Fardelins', 'Lentii', 'Dumele'];
  getJobs = (): string[] => this.jobs;
}
