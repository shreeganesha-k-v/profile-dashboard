export interface AnalysisResponse {
    matchScore: number;
    matchingSkills: string[];
    missingSkills: string[];
    summary : string;
    atsScore: number;
    domainMatch: number;
    seniorityMatch: number;
}