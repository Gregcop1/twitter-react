import moment from 'moment';

const dateHelper = {
    fromNow: (thenTimestamp: number) => {
        const now = moment(),
            then = moment(thenTimestamp),
            diff = (moment.duration(now.diff(then)) as any)._data;

        if (diff.year || diff.month || diff.days) {
            return then.format('D MMMM')
        } else if (diff.hours) {
            return `${diff.hours} h`;
        } if (diff.minutes) {
            return `${diff.minutes} min`;
        }

        return `${diff.seconds} s`;
    }
};

export default dateHelper;
