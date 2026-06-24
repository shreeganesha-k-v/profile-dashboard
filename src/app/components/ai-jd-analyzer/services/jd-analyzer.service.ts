import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AnalysisResponse } from "../analysis-response.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JdAnalyzerService {
      private apiUrl = 'http://localhost:8080/api/analyze';

  constructor(private http: HttpClient) {}

  analyze(
    resumeFile: File,
    jdFile: File
  ): Observable<AnalysisResponse> {

    const formData = new FormData();

    formData.append('resume', resumeFile);

    formData.append('jd', jdFile);

    return this.http.post<AnalysisResponse>(
      this.apiUrl,
      formData
    );
  }

}