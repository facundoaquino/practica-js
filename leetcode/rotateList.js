
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}


// Crear una lista enlazada a partir de un array
function crearListaEnlazada(valores) {
  let dummyHead = new ListNode(); // Nodo inicial auxiliar
  let current = dummyHead;

  valores.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });

  return dummyHead.next; // Retornamos el primer nodo real
}

// Función para imprimir una lista enlazada
function imprimirListaEnlazada(lista) {
  let current = lista;
  let resultado = [];

  while (current !== null) {
    resultado.push(current.val);
    current = current.next;
  }

  console.log("Lista enlazada:", resultado.join(" -> "));
}

// Variables l1 y l2 con las listas enlazadas
const l1 = crearListaEnlazada([1, 2, 3, 4, 5]);
const l2 = crearListaEnlazada([3, 1]);

imprimirListaEnlazada(l1)


var rotateRight = function (head, k) {

  let listAux = head
  let tail;
  let size = 1

  if (head.next == null) {
    return head
  }


  while (listAux.next != null) {
    tail = listAux.next
    listAux = listAux.next
    size++
  }

  k = k % size

  if (k === 0) {
    return head;
  }
  newTailPosition = size - k
  newTailNode = head


  for (i = 1; i < newTailPosition; i++) {
    newTailNode = newTailNode.next
  }

  let newHead = newTailNode.next
  newTailNode.next = null
  tail.next = head


  return newHead
};

const result = rotateRight(l1, 78125)

imprimirListaEnlazada(result)