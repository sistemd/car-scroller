'use strict';

import {expect} from 'chai';
import {upperLeftPoint, upperRightPoint, lowerLeftPoint, lowerRightPoint, pointIsInsideRectangle, rectanglesOverlap} from '../src/utils';

describe('Utils', () => {
    describe('#upperLeftPoint, #upperRightPoint, #lowerLeftPoint, #lowerRightPoint', () => {
        it('Should return the respective corners of the rectangle', () => {
            let rect = {
                x: 5, 
                y: 5,
                width: 10,
                height: 15
            };

            expect(upperLeftPoint(rect)).to.deep.equal({x: 5, y: 5});
            expect(upperRightPoint(rect)).to.deep.equal({x: 15, y: 5});
            expect(lowerLeftPoint(rect)).to.deep.equal({x: 5, y: 20});
            expect(lowerRightPoint(rect)).to.deep.equal({x: 15, y: 20});

            rect = {
                x: -1, 
                y: -1,
                width: 9,
                height: 10
            };

            expect(upperLeftPoint(rect)).to.deep.equal({x: -1, y: -1});
            expect(upperRightPoint(rect)).to.deep.equal({x: 8, y: -1});
            expect(lowerLeftPoint(rect)).to.deep.equal({x: -1, y: 9});
            expect(lowerRightPoint(rect)).to.deep.equal({x: 8, y: 9});

            rect = {
                x: -1, 
                y: -3,
                width: 9,
                height: 10
            };

            expect(upperLeftPoint(rect)).to.deep.equal({x: -1, y: -3});
            expect(upperRightPoint(rect)).to.deep.equal({x: 8, y: -3});
            expect(lowerLeftPoint(rect)).to.deep.equal({x: -1, y: 7});
            expect(lowerRightPoint(rect)).to.deep.equal({x: 8, y: 7});
        });
    });

    describe('#pointIsInsideRectangle', () => {
        it('Should return whether a point is inside a rectangle', () => {
            let rect = {
                x: 5,
                y: 5,
                width: 10,
                height: 15
            };

            expect(pointIsInsideRectangle({x: 5, y: 5}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 4, y: 5}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 5, y: 4}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 4, y: 4}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 5, y: 6}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 6, y: 5}, rect)).to.be.false;

            expect(pointIsInsideRectangle({x: 6, y: 6}, rect)).to.be.true;
            expect(pointIsInsideRectangle({x: 12, y: 6}, rect)).to.be.true;
            expect(pointIsInsideRectangle({x: 6, y: 12}, rect)).to.be.true;
            expect(pointIsInsideRectangle({x: 14, y: 19}, rect)).to.be.true;

            expect(pointIsInsideRectangle({x: 15, y: 20}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 16, y: 20}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 15, y: 21}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 16, y: 21}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 14, y: 20}, rect)).to.be.false;
            expect(pointIsInsideRectangle({x: 15, y: 19}, rect)).to.be.false;
        });
    });

    describe('#rectanglesAreOverlapped', () => {
        it('Should return whether two rectangles overlap', () => {
            const rect = {
                x: 5, 
                y: 5,
                width: 10,
                height: 15
            };

            function check(rect2, result) {
                expect(rectanglesOverlap(rect, rect2)).to.equal(result);
            }

            const testFromUpperLeft = () => {
                check({
                    x: 0,
                    y: 0,
                    width: 5,
                    height: 5
                }, false);

                check({
                    x: 0,
                    y: 0,
                    width: 4,
                    height: 4
                }, false);

                check({
                    x: 0,
                    y: 0,
                    width: 5,
                    height: 4
                }, false);

                check({
                    x: 0,
                    y: 0,
                    width: 4,
                    height: 5
                }, false);

                check({
                    x: 0,
                    y: 0,
                    width: 6,
                    height: 5
                }, false);

                check({
                    x: 0,
                    y: 0,
                    width: 5,
                    height: 6
                }, false);

                check({
                    x: 0,
                    y: 0,
                    width: 6,
                    height: 6
                }, true);
            };

            const testFromUpperRight = () => {
                check({
                    x: 15,
                    y: 0,
                    width: 5,
                    height: 5
                }, false);

                check({
                    x: 15,
                    y: 0,
                    width: 5,
                    height: 4
                }, false);

                check({
                    x: 15,
                    y: 0,
                    width: 5,
                    height: 6
                }, false);

                check({
                    x: 15,
                    y: 0,
                    width: 5,
                    height: 4
                }, false);
            };

            const testFromLowerLeft = () => {
                check({
                    x: 5,
                    y: 20,
                    width: 1,
                    height: 1
                }, false);

                check({
                    x: 5,
                    y: 20,
                    width: 2,
                    height: 2
                }, false);

                check({
                    x: 5,
                    y: 19,
                    width: 2,
                    height: 2
                }, true);

                check({
                    x: 4,
                    y: 20,
                    width: 1,
                    height: 1
                }, false);

                check({
                    x: 3,
                    y: 20,
                    width: 1,
                    height: 1
                }, false);

                check({
                    x: 5,
                    y: 21,
                    width: 3,
                    height: 3
                }, false);

                check({
                    x: 5,
                    y: 19,
                    width: 1,
                    height: 1
                }, true);
            };

            const testFromLowerRight = () => {
                check({
                    x: 15,
                    y: 20,
                    width: 1,
                    height: 1
                }, false);

                check({
                    x: 16,
                    y: 20,
                    width: 1,
                    height: 1
                }, false);

                check({
                    x: 5,
                    y: 21,
                    width: 1,
                    height: 1
                }, false);
            };

            const testArbitrary = () => {
                check({
                    x: 10,
                    y: 0,
                    width: 5,
                    height: 5
                }, false);

                check({
                    x: 10,
                    y: 0,
                    width: 4,
                    height: 5
                }, false);
            };

            testFromUpperLeft();
            testFromLowerLeft();
            testFromUpperRight();
            testFromLowerRight();
            testArbitrary();
        });
    });
});
