import { BST } from './bst';

describe('BST', () => {
  let bst: BST<string>;

  beforeEach(() => {
    bst = new BST<string>();
  });

  test('insert and find single node', () => {
    bst.insert(10, 'ten');
    expect(bst.find(10)).toBe('ten');
  });

  test('insert and find multiple nodes', () => {
    bst.insert(10, 'ten');
    bst.insert(5, 'five');
    bst.insert(15, 'fifteen');
    bst.insert(3, 'three');
    bst.insert(7, 'seven');

    expect(bst.find(10)).toBe('ten');
    expect(bst.find(5)).toBe('five');
    expect(bst.find(15)).toBe('fifteen');
    expect(bst.find(3)).toBe('three');
    expect(bst.find(7)).toBe('seven');
  });

  test('throw error when key not found', () => {
    bst.insert(10, 'ten');
    bst.insert(5, 'five');
    bst.insert(15, 'fifteen');

    expect(() => bst.find(3)).toThrowError('Not found');
  });
});
