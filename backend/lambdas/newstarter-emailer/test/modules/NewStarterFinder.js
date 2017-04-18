'use strict';

import NewStarterFinder from '../../modules/NewStarterFinder'
import {expect} from 'chai';
import sinon from 'sinon';
import moment from 'moment';
var AWS = require('aws-sdk');

describe('NewStarterFinder', () => {
    describe('#findNewStarters', () => {

        let newStarterFinder;
        let sesStub;

        beforeEach(() => {
            newStarterFinder = new NewStarterFinder();
        });


        it('doesn\'t return members who started previously', () => {

            const members = [{
                startDate: '2011-01-01',
                emailTo: 'test@testemail.com'
            }];

            const foundMembers = newStarterFinder.find(members);
            expect(foundMembers.length).to.equal(0);
        });

        it('doesn\'t return members who start in the future', () => {
            const members = [{
                startDate: new moment().add(4, 'day'),
                emailTo: 'test@testemail.com'
            }];

            var foundMembers = newStarterFinder.find(members);
            expect(foundMembers.length).to.equal(0);
        });

        it('returns people who start today', () => {

            const members = [{
                startDate: new moment(),
                emailTo: 'test@testemail.com'
            }];

            var foundMembers = newStarterFinder.find(members);
            expect(foundMembers.length).to.equal(1);
        });
    });

});
