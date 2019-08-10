import { Injectable } from '@angular/core';
import mockLib from '../../mock';
import { Member } from '../member-model';

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {
  member;
  maxIndex: number;
  constructor() {
    this.member = mockLib.flattenMock(mockLib.mock);
    this.maxIndex = this.member.length;
  }
  getMember() {
    return this.member;
  }
  deleteMember(id) {
    this.member = this.member.filter((member) => member.id !== id);
  }
  getSingleMember(id) {
    if (id === -1) {
      return new Member();
    }
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
  addMember(val) {
    this.member.push(val);
    this.member[this.member.length - 1]['id'] = this.maxIndex;
    this.maxIndex++;
  }
}
