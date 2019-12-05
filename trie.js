/**
 * Initialize your data structure here.
 */
let Trie = function() {
  this.head = {
    val: null,
    children: {},
    words: false
  }
};

Trie.prototype.insert = function(word) {
  let cur = this.head
  for (let i = 0; i < word.length; i++) {
    if (cur.children[word[i]]) {
			cur = cur.children[word[i]]
			cur.words.push(word)
			cur.words = cur.words.sort((a,b) => {
				return a.localeCompare(b)
			})
    } else {
			cur.children[word[i]] = {
				val: word[i],
				children: {},
				words: [word]
			}
			cur = cur.children[word[i]]
		}
  }
};

Trie.prototype.search = function(word) {
  let cur = this.head
  for (let i = 0; i < word.length; i++) {
    if (!cur.children[word[i]]) {
      return false
    } else {
      cur = cur.children[word[i]]
    }
  }
  return cur.words.slice(0,3)
};


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

 let t = new Trie()
 let repository = ["mobile", "mouse", "moneypot", "monitor", "mousepad"]
 repository.forEach(word => {
	 t.insert(word)
 })
 console.log(t.search('m'))
 console.log(t.search('mo'))
 console.log(t.search('mou'))