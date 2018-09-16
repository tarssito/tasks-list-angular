import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Task } from './models/task.model';


@Injectable()
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;

  constructor(
    private db: AngularFirestore
  ) {
    this.setTaks();
  }

  private setTaks(): void {
    this.tasks = this.db.collection<Task>('/tasks');
  }

  create(task: Task): Promise<void> {
    const uid = this.db.createId();
    return this.tasks.doc<Task>(uid)
      .set({
        uid,
        title: task.title,
        done: false
      });
  }

  update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid).update(task);
  }

  delete(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid).delete();
  }

  get(uid: string): Observable<Task> {
    return this.tasks.doc<Task>(uid).valueChanges();
  }
}
