import Node from "./Node.js";
export default class BinaryTree {
  constructor(data) {
    this.root = null; // nó da árvore
    this.type = null;
  }
  insert(data) {
    if (this.root == null) {
      this.root = new Node(data);
      return;
    }
    this.insertNode(this.root, data);
  }
  insertNode(node, data) {
    if(typeof data != 'number'){
      node.isNum = false;
    }else{
      node.isNum = true;
    }

    if (node.data < data) {
      if (node.right == null) {
        node.right = new Node(data);
        node.children[1] = node.right;
      } else {
        this.insertNode(node.right, data);
      }
    } else {
      // Node.data < data
      if (node.left == null) {
        node.left = new Node(data);
        node.children[0] = node.left;
      } else {
        this.insertNode(node.left, data);
      }
    }
  }
  inOrderTranverse(callback) {
    this.inOrderTranverseNode(this.root, callback);
  }
  inOrderTranverseNode(node, callback) {
    if (node != null) {
      this.inOrderTranverseNode(node.left, callback);
      callback(node);
      this.inOrderTranverseNode(node.right, callback);
    }
  }
  preOrderTranverse(callback) {
    this.preOrderTranverseNode(this.root, callback);
  }
  preOrderTranverseNode(node, callback) {
    if (node != null) {
      callback(node);
      this.preOrderTranverseNode(node.left, callback);
      this.preOrderTranverseNode(node.right, callback);
    }
  }
  postOrderTranverse(callback) {
    this.postOrderTranverseNode(this.root, callback);
  }
  postOrderTranverseNode(node, callback) {
    if (node != null) {
      this.postOrderTranverseNode(node.left, callback);
      this.postOrderTranverseNode(node.right, callback);
      callback(node);
    }
  }
  levelOrderTranverse(callback) {
    this.levelOrderTranverseNode(this.root, callback);
  }
  levelOrderTranverseNode(node, callback) {
    let queue = [];
    queue.push(node);
    while (queue.length != 0) {
      let temp = queue.shift();
      callback(temp); // temp.data
      if (temp.left != null) {
        queue.push(temp.left);
      }
      if (temp.right != null) {
        queue.push(temp.right);
      }
    }
  }
  contains(data){
    let current = this.root;

    while(current != null){
      if(current.data == data){
        return true;
      }
      if(current.data < data){
        current = current.right;
      }else{
        current = current.left;
      }
    }
    return false
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  size() {
    return this.sizeNode(this.root);
  }
  sizeNode(node) {
    if (node != null) {
      return 1 + this.sizeNode(node.left) + this.sizeNode(node.right);
    }
    return 0;
  }
  height() {
    return this.heightNode(this.root);
  }
  heightNode(node) {
    if (node == null) {
      return 0;
    }
    let lDepth = this.heightNode(node.left);
    let rDepth = this.heightNode(node.right);

    if (lDepth > rDepth) {
      return lDepth + 1;
    } else {
      return rDepth + 1;
    }
  }
  internalLength() {
    return this.internalLenghtNode(this.root);
  }
  internalLenghtNode(node, depth = 0) {
    if (node == null) {
      return 0;
    }
    if (node.left != null || node.right != null) {
      return (
        depth +
        this.internalLenghtNode(node.left, depth + 1) +
        this.internalLenghtNode(node.right, depth + 1)
      );
    } else {
      return depth;
    }
  }
  isBalanced() {
    return this.isBalancedNode(this.root);
    // VALOR POSITIVO == BALANCEADA
  }
  isBalancedNode(node) {
    if (node == null) return 0;
    let lh = this.isBalancedNode(node.left);
    if (lh == -1) return -1;
    let rh = this.isBalancedNode(node.right);
    if (rh == -1) return -1;

    if (Math.abs(lh - rh) > 1) return -1;
    else return Math.max(lh, rh) + 1;
  }
}

// insert(key): esse método insere uma nova chave na árvore.
// • search(key): esse método busca a chave na árvore e devolve true se
// ela existir, e false se o nó não existir.
// • inOrderTraverse(): esse método visita todos os nós da árvore usando
// um percurso em-ordem (in-order).
// • preOrderTraverse(): esse método visita todos os nós da árvore
// usando um percurso pré-ordem (pre-order).
// • postOrderTraverse(): esse método visita todos os nós da árvore
// usando um percurso pós-ordem (post-order).
// • min(): esse método devolve a chave/valor mínimo da árvore.
// • max(): esse método devolve a chave/valor máximo da árvore.
// • remove(key): esse método remove a chave da árvore.
// Implementaremos cada um desses métodos nas próximas seções
