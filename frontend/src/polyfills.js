import process from 'process';
import { Buffer } from 'buffer';
import { Readable, Duplex } from 'stream';

window.process = process;
window.Buffer = Buffer;
window.Readable = Readable;
window.Duplex = Duplex;
window.global = window;