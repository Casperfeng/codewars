function sumIntervals(intervals){
    var previous = [],
        controlVar = 0,
        res = 0,
        i, length, n, nlength;
    for ( i = 0, length = intervals.length; i < length; i++ ) {
        controlVar = 0;
        for ( n = 0, nlength = previous.length; n < nlength; n++ ) {
            if ( intervals[i][0] <= previous[n][0] && intervals[i][1] <= previous[n][1] && intervals[i][1] >= previous[n][0]) {
                previous[n][0] = intervals[i][0];
                controlVar = 1;
                break;
            } else if
                ( intervals[i][0] >= previous[n][0] && intervals[i][1] >= previous[n][1] &&
                    intervals[i][0] <= previous[n][1] ) {
                    previous[n][1] = intervals[i][1];
                    controlVar = 1;
                    break;
            } else if ( intervals[i][0] >= previous[n][0] && intervals[i][1] <= previous[n][1] ) {
                controlVar=1;
            }
        }
        if ( 0 === controlVar ) {
            previous.push( intervals[i] );
        }
    }
    for ( i = 0, length = previous.length; i < length; i++ ) {
        res += previous[i][1] - previous[i][0];
    }
    return res;
}