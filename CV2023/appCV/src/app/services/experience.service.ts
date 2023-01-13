import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience.interface';
import { experience } from '../utils/dbExperience..db';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private arrExperience: Experience[] = experience;
  arrExpe: any = [];
  constructor() {}

  getAll(): any {
    return this.arrExperience;
  }
  getExperienceById(id: number): Experience[] | any {
    return this.arrExperience.find((experience) => experience.id === id);
  }
}
