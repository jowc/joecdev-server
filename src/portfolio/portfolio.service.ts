import { Injectable } from '@nestjs/common';

@Injectable()
export class PortfolioService {
  jobs = ['Fardelins', 'Lentii', 'Dumele', 'Sabi Radio'];
  getJobs = (): string[] => this.jobs;
}
