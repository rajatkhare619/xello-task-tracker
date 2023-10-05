import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];
  private readonly apiURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  createTask(task: any) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<Task>(this.apiURL, task, { headers });
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL);
  }

  editTask(task: Task) {
    return this.http.put<Task>(`${this.apiURL}/${task.id}`, task);
  }

  deleteTask(taskID: string) {
    return this.http.delete<Task>(`${this.apiURL}/${taskID}`);
  }
}
