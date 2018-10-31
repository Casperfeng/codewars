function narcissistic(value) {
    const _value = String(value).split('');

    let _result = 0;

    for (ch of _value) {
        const num = parseInt(ch, 0)

        _result += Math.pow(num, _value.length);
    }

    return _result === value;
}