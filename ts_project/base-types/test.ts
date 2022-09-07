let a: number = 4;
let b = 'stsfs';
let c = true;

let d: string[] = ['sfsd', 'sfsdf'];

let e: any = 3;
e = 'sddf';

function test(a: string): number | string {
    return '';
}

const test2 = (a: number): void => {
    return a*2;
}

d = d.map((x:string) => x.toLowerCase());

function countCoord(coord: { lat: number, long?: number}) {

}

function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString());
    } else if (typeof id === 'string') {
        id.toUpperCase()
    }
}

function getSum(a: number | number[]) {
    if(Array.isArray(a)) {

    }
}

const x: undefined = undefined;
const z: null = null;