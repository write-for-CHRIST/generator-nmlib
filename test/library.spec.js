/* global describe, it, before */

import chai from 'chai';
import { Creator, Man, Cat, Dog } from '../src/index';

chai.expect();

const expect = chai.expect;

let lib;
let creator;
let man;

describe('The Creator', () => {
  before(() => {
    creator = new Creator();
  });
  describe('should has', () => {
    it('Holy Name', () => {
      expect(creator.name).to.be.equal('Elohim');
    });
    it('Trinity', () => {
      expect(creator.isTrinity).to.be.equal(true);
    });
    it('Love', () => {
      expect(creator.isLove).to.be.equal('Yes');
    });
  });
});

describe('Man', () => {
  before(() => {
    creator = new Creator();
    man = new Man();
    man.name = 'Adam';
    man.addBehavior("Like God's Image");
    man.addBehavior(creator._behavior);
    man.addBehavior('Not obey to ' + creator.name);
    man.addBehavior('Listen to evil, lie');
  });
  describe('should has', () => {
    it('general name', () => {
      expect(man.name).to.be.equal('Adam');
    });
    it('have some behaviors', () => {
      expect(man._behaviors).to.exist;
    });
    it('love as the Creator', () => {
      expect(man._behaviors).to.include('Love');
    });
  });
});

describe('Given an instance of my Cat library', () => {
  before(() => {
    lib = new Cat();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Cat');
    });
  });
});

describe('Given an instance of my Dog library', () => {
  before(() => {
    lib = new Dog();
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Dog');
    });
  });
});
