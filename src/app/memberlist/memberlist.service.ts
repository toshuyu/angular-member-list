import { Injectable } from '@angular/core';
import mockLib from '../../mock';

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {
  member;
  constructor() {
    this.member = mockLib.flattenMock(mockLib.mock);
  }
  getMember() {
    return this.member;
  }
  deleteMember(ind) {
    this.member.splice(ind, 1);
  }
}
