import test from 'tape';
import win from '../src/win';

test('Tests - win.js', t => {
    global.window = {};
    t.equal(win(), global.window, 'Win is global.window');
    delete global.window;
    t.equal(win(), global, 'Win is global');
    t.end();
});
