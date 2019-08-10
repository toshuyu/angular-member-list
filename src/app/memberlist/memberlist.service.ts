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
  deleteMember(id) {
    this.member = this.member.filter((member) => member.id !== id);
  }
  getSingleMember(id) {
    return this.member.filter((member) => member.id === id)[0];
  }
  setSingleMember(id, val) {
    this.member = this.member.map(member => {
      if (id === member.id) {
        return val;
      } else {
        return member;
      }
    });
  }
}
