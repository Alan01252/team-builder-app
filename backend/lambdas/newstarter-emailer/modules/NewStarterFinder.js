import moment from 'moment';

class NewStarterFinder {

    find(members) {
        return members.filter((member) => {
            if (moment().isSame(member.startDate, 'day')) {
                return true;
            }
        });
    };
};

module.exports = NewStarterFinder;


