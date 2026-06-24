import { Component } from '@angular/core';
import { JdAnalyzerService } from './services/jd-analyzer.service';
import { AnalysisResponse } from './analysis-response.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ai-jd-analyzer',
  templateUrl: './ai-jd-analyzer.html',
  styleUrls: ['./ai-jd-analyzer.css'],
  imports: [CommonModule]
})
export class AiJdAnalyzerComponent {

  resumeFile?: File;

  jdFile?: File;

  isLoading = false;

  analysisResult?: AnalysisResponse;

  constructor(
    private jdAnalyzerService: JdAnalyzerService
  ) {}

  onResumeSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.resumeFile = input.files[0];
  }

  onJdSelected(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.jdFile = input.files[0];
  }

  analyze(): void {

    if (!this.resumeFile || !this.jdFile) {
      return;
    }

    this.isLoading = true;

    this.analysisResult = undefined;

    this.jdAnalyzerService
      .analyze(
        this.resumeFile,
        this.jdFile
      )
      .subscribe({
        next: (response) => {

          this.analysisResult = response;

          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }
}