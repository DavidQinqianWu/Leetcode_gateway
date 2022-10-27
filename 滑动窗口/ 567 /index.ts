function checkInclusion(t: string, s: string) {
    let need = new Map<string, number>();
    let window = new Map<string, number>();
    for (let i = 0; i < t.length; i++) {
        const value = need.get(t[i]);
        if (value) {
            need.set(t[i], value + 1);
        } else {
            need.set(t[i], 1);
        }
    }

    let left = 0,
        right = 0,
        valid = 0;

    while (right < s.length) {
        const c = s[right];
        right++;
        // 进行窗口内的数据的一些列更新
        if (need.has(c)) {
            const value = window.get(c);
            if (value) {
                window.set(c, value + 1);
            } else {
                window.set(c, 1);
            }
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }
        while (right - left >= t.length) {
            // 判断左侧窗口是否要收缩
            if (valid === need.size) {
                return true;
            }
            const d = s[left];
            left++;
            // 进行窗口内的数据的一些列更新
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                const value = window.get(d);
                if (value) {
                    window.set(d, value - 1);
                } else {
                    window.set(d, -1);
                }
            }
        }
    }
    return false;
}
