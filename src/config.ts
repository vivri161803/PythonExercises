export type Difficulty = 'Facile' | 'Medio' | 'Difficile';

export interface Exercise {
  id: string;
  topic: string;
  title: string;
  text: string;
  solution: string;
  difficulty: Difficulty;
}

export interface AppConfig {
  metadata: {
    title: string;
    subtitle: string;
    date: string;
    description: string;
  };
  theme: {
    accentColor: string;
    particleColor: string;
  };
  exercises: Exercise[];
}

export const config: AppConfig = {
  metadata: {
    title: "Python Programming Lab",
    subtitle: "Set, Dizionari, Classi ed Alberi",
    date: "5 Giugno 2026",
    description: "Esercizi per lo studio di Python"
  },
  theme: {
    accentColor: "#ffffff", // Pure white to match the bold title exactly
    particleColor: "#e0e0e0" // Off-white / Pearl
  },
  exercises: [
    // SETS (10 esercizi)
    {
      id: "set-1",
      topic: "Sets",
      title: "Elementi Unici (Senza scorciatoie)",
      text: "Scrivi una funzione `unique_elements(lst)` che prende una lista e restituisce un Set con gli elementi univoci, inserendoli uno ad uno tramite un ciclo for.",
      solution: "def unique_elements(lst):\n    unique_set = set()\n    for element in lst:\n        unique_set.add(element)\n    return unique_set",
      difficulty: "Facile"
    },
    {
      id: "set-2",
      topic: "Sets",
      title: "Elementi Comuni (Manuale)",
      text: "Scrivi una funzione `common_elements(list1, list2)` che restituisce un Set di elementi presenti in entrambe le liste, verificandoli con un ciclo e un 'if'.",
      solution: "def common_elements(list1, list2):\n    common = set()\n    for element in list1:\n        if element in list2:\n            common.add(element)\n    return common",
      difficulty: "Facile"
    },
    {
      id: "set-3",
      topic: "Sets",
      title: "Differenza Simmetrica Espressa",
      text: "Scrivi `symmetric_difference(list1, list2)` per trovare gli elementi presenti in una sola delle due liste, senza usare l'operatore ^.",
      solution: "def symmetric_difference(list1, list2):\n    result = set()\n    for element in list1:\n        if element not in list2:\n            result.add(element)\n    \n    for element in list2:\n        if element not in list1:\n            result.add(element)\n            \n    return result",
      difficulty: "Medio"
    },
    {
      id: "set-4",
      topic: "Sets",
      title: "Verifica Sottoinsieme",
      text: "Scrivi una funzione `is_subset(list1, list2)` che restituisce True se tutti gli elementi di list1 sono in list2, interrompendosi appena ne trova uno mancante.",
      solution: "def is_subset(list1, list2):\n    for element in list1:\n        if element not in list2:\n            return False\n            \n    return True",
      difficulty: "Medio"
    },
    {
      id: "set-5",
      topic: "Sets",
      title: "Trova le Vocali",
      text: "Crea un set con le vocali. Scrivi una funzione che estragga tutte le vocali uniche presenti in una stringa.",
      solution: "def extract_vowels(string):\n    vowels = {'a', 'e', 'i', 'o', 'u'}\n    found = set()\n    \n    for char in string:\n        char_lower = char.lower()\n        if char_lower in vowels:\n            found.add(char_lower)\n            \n    return found",
      difficulty: "Facile"
    },
    {
      id: "set-6",
      topic: "Sets",
      title: "Intersezione di 3 Liste",
      text: "Trova gli elementi comuni tra 3 liste usando i set in passaggi separati e ben chiari.",
      solution: "def common_in_three(list1, list2, list3):\n    common_1_2 = set()\n    for element in list1:\n        if element in list2:\n            common_1_2.add(element)\n            \n    final_common = set()\n    for element in common_1_2:\n        if element in list3:\n            final_common.add(element)\n            \n    return final_common",
      difficulty: "Medio"
    },
    {
      id: "set-7",
      topic: "Sets",
      title: "Elementi Mancanti",
      text: "Date due liste `expected` e `actual`, restituisci un set con gli elementi che ci si aspettava ma che mancano.",
      solution: "def find_missing(expected, actual):\n    missing = set()\n    for element in expected:\n        if element not in actual:\n            missing.add(element)\n            \n    return missing",
      difficulty: "Facile"
    },
    {
      id: "set-8",
      topic: "Sets",
      title: "Controllo Pangramma",
      text: "Verifica se una stringa contiene tutte le lettere dell'alfabeto inglese usando un set per contare le lettere uniche trovate.",
      solution: "def is_pangram(string):\n    letters_found = set()\n    \n    for char in string:\n        if char.isalpha():\n            letters_found.add(char.lower())\n            \n    if len(letters_found) == 26:\n        return True\n    else:\n        return False",
      difficulty: "Medio"
    },
    {
      id: "set-9",
      topic: "Sets",
      title: "Insiemi Disgiunti",
      text: "Controlla se due liste non hanno alcun elemento in comune (sono disgiunte) senza usare metodi integrati.",
      solution: "def are_disjoint(list1, list2):\n    for element in list1:\n        if element in list2:\n            # Abbiamo trovato un elemento in comune\n            return False\n            \n    return True",
      difficulty: "Facile"
    },
    {
      id: "set-10",
      topic: "Sets",
      title: "Rimozione Duplicati Complessi",
      text: "Data una lista di dizionari, restituisci una lista senza duplicati. Spiega il passaggio per rendere i dizionari 'hashable' usando le tuple.",
      solution: "def remove_duplicate_dicts(lst):\n    seen = set()\n    result = []\n    \n    for d in lst:\n        # Un dizionario non può essere inserito in un set\n        # Convertiamo i suoi (chiave, valore) in una tupla immutabile\n        items_tuple = tuple(d.items())\n        \n        if items_tuple not in seen:\n            seen.add(items_tuple)\n            result.append(d)\n            \n    return result",
      difficulty: "Difficile"
    },

    // DICTIONARIES (10 esercizi)
    {
      id: "dict-1",
      topic: "Dictionaries",
      title: "Frequenza Caratteri (If/Else)",
      text: "Calcola la frequenza di ogni carattere in una stringa usando un ciclo for e un blocco if/else esplicito.",
      solution: "def char_frequency(string):\n    freq = {}\n    for char in string:\n        if char in freq:\n            freq[char] = freq[char] + 1\n        else:\n            freq[char] = 1\n    return freq",
      difficulty: "Facile"
    },
    {
      id: "dict-2",
      topic: "Dictionaries",
      title: "Unisci e Somma",
      text: "Unisc i due dizionari. Se una chiave è in entrambi, somma i valori, mostrando chiaramente i due cicli separati.",
      solution: "def merge_dicts(dict1, dict2):\n    merged = {}\n    \n    # Copiamo prima il dict1\n    for key, value in dict1.items():\n        merged[key] = value\n        \n    # Aggiungiamo il dict2\n    for key, value in dict2.items():\n        if key in merged:\n            merged[key] = merged[key] + value\n        else:\n            merged[key] = value\n            \n    return merged",
      difficulty: "Medio"
    },
    {
      id: "dict-3",
      topic: "Dictionaries",
      title: "Inverti Dizionario",
      text: "Scambia chiavi e valori di un dizionario iterando sui suoi elementi. Assumi che i valori originali siano univoci.",
      solution: "def invert_dict(d):\n    inverted = {}\n    for key, value in d.items():\n        # Il vecchio valore diventa la nuova chiave\n        inverted[value] = key\n    return inverted",
      difficulty: "Facile"
    },
    {
      id: "dict-4",
      topic: "Dictionaries",
      title: "Raggruppa per Valore",
      text: "Ricevi un dizionario e restituiscino uno nuovo dove le chiavi sono i valori originali e i valori sono liste di chiavi. Usa if/else.",
      solution: "def group_by_value(d):\n    grouped = {}\n    for key, value in d.items():\n        if value not in grouped:\n            # Inizializza una nuova lista vuota\n            grouped[value] = []\n            \n        grouped[value].append(key)\n        \n    return grouped",
      difficulty: "Medio"
    },
    {
      id: "dict-5",
      topic: "Dictionaries",
      title: "Filtro con Soglia",
      text: "Crea un nuovo dizionario che contiene solo le coppie chiave-valore dove il valore è strettamente maggiore di una soglia data.",
      solution: "def filter_by_threshold(d, threshold):\n    filtered = {}\n    for key, value in d.items():\n        if value > threshold:\n            filtered[key] = value\n    return filtered",
      difficulty: "Facile"
    },
    {
      id: "dict-6",
      topic: "Dictionaries",
      title: "Studente col Voto Più Alto",
      text: "Trova il nome dello studente col voto massimo iterando sul dizionario e tenendo traccia del nome e del voto migliore.",
      solution: "def top_student(students):\n    best_name = \"\"\n    max_grade = -1\n    \n    for name, grade in students.items():\n        if grade > max_grade:\n            max_grade = grade\n            best_name = name\n            \n    return best_name",
      difficulty: "Facile"
    },
    {
      id: "dict-7",
      topic: "Dictionaries",
      title: "Valore Magazzino",
      text: "Dati due dizionari `prices` e `stock`, calcola il valore totale del magazzino iterando sui prodotti in stock.",
      solution: "def inventory_value(prices, stock):\n    total_value = 0\n    \n    for item, quantity in stock.items():\n        if item in prices:\n            item_price = prices[item]\n            total_value = total_value + (item_price * quantity)\n            \n    return total_value",
      difficulty: "Medio"
    },
    {
      id: "dict-8",
      topic: "Dictionaries",
      title: "Ricerca Chiavi per Valore",
      text: "Trova tutte le chiavi che corrispondono a uno specifico valore target, salvandole in una lista.",
      solution: "def find_keys(d, target):\n    keys_found = []\n    for key, value in d.items():\n        if value == target:\n            keys_found.append(key)\n    return keys_found",
      difficulty: "Facile"
    },
    {
      id: "dict-9",
      topic: "Dictionaries",
      title: "Dizionario da due Liste",
      text: "Date una lista di chiavi e una di valori della stessa lunghezza, costruisci un dizionario usando un ciclo for sugli indici.",
      solution: "def build_dict(keys, values):\n    result = {}\n    for index in range(len(keys)):\n        current_key = keys[index]\n        current_value = values[index]\n        result[current_key] = current_value\n        \n    return result",
      difficulty: "Medio"
    },
    {
      id: "dict-10",
      topic: "Dictionaries",
      title: "Dizionario Nidificato Appiattito",
      text: "Appiattisci un dizionario con esattamente un livello di nidificazione (es. `{'a': {'b': 1}}` -> `{'a_b': 1}`) con cicli annidati.",
      solution: "def flatten_simple_dict(d):\n    flat = {}\n    for outer_key, inner_dict in d.items():\n        if type(inner_dict) is dict:\n            for inner_key, value in inner_dict.items():\n                new_key = outer_key + \"_\" + inner_key\n                flat[new_key] = value\n        else:\n            flat[outer_key] = inner_dict\n            \n    return flat",
      difficulty: "Difficile"
    },

    // CLASSES (10 esercizi)
    {
      id: "class-1",
      topic: "Classes",
      title: "Classe Rettangolo Semplice",
      text: "Crea una classe `Rectangle` esplicitando il costruttore e scrivendo metodi separati con operazioni di base.",
      solution: "class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n\n    def get_area(self):\n        area = self.width * self.height\n        return area\n\n    def get_perimeter(self):\n        perimeter = 2 * (self.width + self.height)\n        return perimeter",
      difficulty: "Facile"
    },
    {
      id: "class-2",
      topic: "Classes",
      title: "Conto Bancario Sicuro",
      text: "Scrivi `BankAccount` con controlli espliciti: non si possono depositare importi negativi e non si può prelevare più del saldo.",
      solution: "class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.balance = self.balance + amount\n\n    def withdraw(self, amount):\n        if amount > 0:\n            if self.balance >= amount:\n                self.balance = self.balance - amount\n                return True\n        return False",
      difficulty: "Facile"
    },
    {
      id: "class-3",
      topic: "Classes",
      title: "Media Voti Studente",
      text: "Crea la classe `Student` che calcola la media dei voti iterando sulla lista manualmente e calcolando la somma parziale.",
      solution: "class Student:\n    def __init__(self, name, grades):\n        self.name = name\n        self.grades = grades\n\n    def average_grade(self):\n        if len(self.grades) == 0:\n            return 0\n            \n        total_sum = 0\n        for grade in self.grades:\n            total_sum = total_sum + grade\n            \n        average = total_sum / len(self.grades)\n        return average",
      difficulty: "Medio"
    },
    {
      id: "class-4",
      topic: "Classes",
      title: "Somma Vettori 2D",
      text: "Sovraccarica l'operatore `+` creando due variabili intermedie per le nuove x e y prima di istanziare il nuovo `Vector2D`.",
      solution: "class Vector2D:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other_vector):\n        new_x = self.x + other_vector.x\n        new_y = self.y + other_vector.y\n        \n        new_vector = Vector2D(new_x, new_y)\n        return new_vector",
      difficulty: "Medio"
    },
    {
      id: "class-5",
      topic: "Classes",
      title: "Biblioteca Iterativa",
      text: "Crea una `Library` dove il prestito del libro avviene iterando manualmente sui libri disponibili con un ciclo for e un flag.",
      solution: "class Library:\n    def __init__(self):\n        self.books = []\n\n    def add_book(self, title):\n        self.books.append(title)\n\n    def borrow_book(self, target_title):\n        found = False\n        for i in range(len(self.books)):\n            if self.books[i] == target_title:\n                del self.books[i]\n                found = True\n                break\n                \n        return found",
      difficulty: "Medio"
    },
    {
      id: "class-6",
      topic: "Classes",
      title: "Consumo Carburante Auto",
      text: "Simula un'auto che viaggia. Controlla prima se c'è abbastanza benzina (1km = 0.1 litri) prima di scalare il carburante.",
      solution: "class Car:\n    def __init__(self, brand, fuel):\n        self.brand = brand\n        self.fuel = fuel\n        \n    def drive(self, distance_km):\n        consumed_fuel = distance_km * 0.1\n        \n        if self.fuel >= consumed_fuel:\n            self.fuel = self.fuel - consumed_fuel\n            return True\n        else:\n            return False",
      difficulty: "Facile"
    },
    {
      id: "class-7",
      topic: "Classes",
      title: "Aumento Salario",
      text: "Gestisci un `Employee`. Crea il metodo `give_raise` che calcola in step separati l'ammontare dell'aumento e il nuovo stipendio.",
      solution: "class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n        \n    def give_raise(self, percent_increase):\n        increase_amount = self.salary * (percent_increase / 100)\n        self.salary = self.salary + increase_amount\n        return self.salary",
      difficulty: "Facile"
    },
    {
      id: "class-8",
      topic: "Classes",
      title: "Distanza tra Due Punti",
      text: "Definisci un punto `Point(x, y)` e scrivi il metodo per calcolare la distanza verso un altro punto spezzando la formula geometrica.",
      solution: "class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n        \n    def distance_to(self, other_point):\n        delta_x = self.x - other_point.x\n        delta_y = self.y - other_point.y\n        \n        squared_sum = (delta_x ** 2) + (delta_y ** 2)\n        distance = squared_sum ** 0.5\n        \n        return distance",
      difficulty: "Medio"
    },
    {
      id: "class-9",
      topic: "Classes",
      title: "Lista Cose da Fare (ToDo)",
      text: "Gestisci i task. Per rimuovere, assicurati prima che il task esista iterando su tutta la lista per evitare errori inattesi.",
      solution: "class ToDoList:\n    def __init__(self):\n        self.tasks = []\n        \n    def add_task(self, task):\n        self.tasks.append(task)\n        \n    def remove_task(self, task_to_remove):\n        for i in range(len(self.tasks)):\n            if self.tasks[i] == task_to_remove:\n                del self.tasks[i]\n                return True\n        return False",
      difficulty: "Medio"
    },
    {
      id: "class-10",
      topic: "Classes",
      title: "Gestione Proprietà (Getter/Setter Classici)",
      text: "Crea una classe `Temperature` ed evita il decoratore `@property`. Usa invece metodi espliciti `get_fahrenheit` e `set_fahrenheit` per capire meglio l'incapsulamento.",
      solution: "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n        \n    def get_fahrenheit(self):\n        temp_f = (self.celsius * 9/5) + 32\n        return temp_f\n        \n    def set_fahrenheit(self, value_f):\n        self.celsius = (value_f - 32) * 5/9",
      difficulty: "Difficile"
    },

    // TREES (10 esercizi)
    {
      id: "tree-1",
      topic: "Trees",
      title: "Struttura Nodo",
      text: "Definisci la classe base del nodo di un albero binario, mostrando tutti gli assegnamenti in variabili.",
      solution: "class TreeNode:\n    def __init__(self, value):\n        self.value = value\n        self.left = None\n        self.right = None",
      difficulty: "Facile"
    },
    {
      id: "tree-2",
      topic: "Trees",
      title: "Conteggio Foglie (Passaggi Espliciti)",
      text: "Conta le foglie in modo ricorsivo. Salva i risultati delle chiamate ricorsive in variabili separate prima di sommarle.",
      solution: "def count_leaves(root):\n    if root is None:\n        return 0\n        \n    if root.left is None and root.right is None:\n        # Trovata una foglia\n        return 1\n        \n    left_leaves = count_leaves(root.left)\n    right_leaves = count_leaves(root.right)\n    \n    total_leaves = left_leaves + right_leaves\n    return total_leaves",
      difficulty: "Medio"
    },
    {
      id: "tree-3",
      topic: "Trees",
      title: "Profondità Massima Ramificata",
      text: "Calcola l'altezza dell'albero calcolando esplicitamente le altezze destra e sinistra, per poi usare un if/else.",
      solution: "def max_depth(root):\n    if root is None:\n        return 0\n        \n    left_depth = max_depth(root.left)\n    right_depth = max_depth(root.right)\n    \n    if left_depth > right_depth:\n        return left_depth + 1\n    else:\n        return right_depth + 1",
      difficulty: "Medio"
    },
    {
      id: "tree-4",
      topic: "Trees",
      title: "Pre-order Traversal (Iterando le chiamate)",
      text: "Invece di concatenare direttamente le liste, crea una lista vuota `result` e fai append ad ogni passaggio per capire il flusso.",
      solution: "def preorder(root):\n    result = []\n    if root is not None:\n        result.append(root.value)\n        \n        left_values = preorder(root.left)\n        for val in left_values:\n            result.append(val)\n            \n        right_values = preorder(root.right)\n        for val in right_values:\n            result.append(val)\n            \n    return result",
      difficulty: "Difficile"
    },
    {
      id: "tree-5",
      topic: "Trees",
      title: "Albero Specchio Trasparente",
      text: "Inverti l'albero salvando il figlio sinistro in una variabile temporanea prima di sovrascriverlo, rendendo chiaro lo scambio.",
      solution: "def invert_tree(root):\n    if root is not None:\n        # Scambio temporaneo\n        temp = root.left\n        root.left = root.right\n        root.right = temp\n        \n        # Chiamate ricorsive\n        invert_tree(root.left)\n        invert_tree(root.right)\n        \n    return root",
      difficulty: "Medio"
    },
    {
      id: "tree-6",
      topic: "Trees",
      title: "Somma di Tutti i Nodi",
      text: "Somma il valore di tutti i nodi. Scomponi la somma in root.value, left_sum e right_sum.",
      solution: "def sum_nodes(root):\n    if root is None:\n        return 0\n        \n    left_sum = sum_nodes(root.left)\n    right_sum = sum_nodes(root.right)\n    \n    total = root.value + left_sum + right_sum\n    return total",
      difficulty: "Facile"
    },
    {
      id: "tree-7",
      topic: "Trees",
      title: "Ricerca in BST Esplicita",
      text: "Cerca un valore in un Albero Binario di Ricerca. Mostra tutti i percorsi 'if', '<' e '>' restituendo le chiamate.",
      solution: "def search_bst(root, target):\n    if root is None:\n        return False\n        \n    if root.value == target:\n        return True\n        \n    if target < root.value:\n        # Cerca a sinistra\n        return search_bst(root.left, target)\n    else:\n        # Cerca a destra\n        return search_bst(root.right, target)",
      difficulty: "Medio"
    },
    {
      id: "tree-8",
      topic: "Trees",
      title: "Valore Minimo nel BST",
      text: "Il minimo in un BST si trova tutto a sinistra. Usa un semplice ciclo while al posto della ricorsione.",
      solution: "def find_min_bst(root):\n    if root is None:\n        return None\n        \n    current = root\n    # Continua ad andare a sinistra finché possibile\n    while current.left is not None:\n        current = current.left\n        \n    return current.value",
      difficulty: "Facile"
    },
    {
      id: "tree-9",
      topic: "Trees",
      title: "Conteggio Target",
      text: "Conta quante volte uno specifico valore appare in un albero binario (non BST) accumulando il conteggio.",
      solution: "def count_value(root, target):\n    if root is None:\n        return 0\n        \n    count = 0\n    if root.value == target:\n        count = 1\n        \n    left_count = count_value(root.left, target)\n    right_count = count_value(root.right, target)\n    \n    total = count + left_count + right_count\n    return total",
      difficulty: "Medio"
    },
    {
      id: "tree-10",
      topic: "Trees",
      title: "Stampa Figli della Radice",
      text: "Un esercizio elementare sui rami dell'albero: restituisci una lista contenente solo i valori del livello immediatamente inferiore alla radice, senza chiamate ricorsive.",
      solution: "def get_root_children(root):\n    if root is None:\n        return []\n        \n    children = []\n    \n    if root.left is not None:\n        children.append(root.left.value)\n        \n    if root.right is not None:\n        children.append(root.right.value)\n        \n    return children",
      difficulty: "Facile"
    }
  ]
};
