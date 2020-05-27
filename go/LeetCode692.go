import "container/heap"

func topKFrequent(words []string, k int) []string {
    // count the word freqency of all words
    memo := make(map[string] int)
    for i := 0; i < len(words); i++ {
        w := words[i]
        if _, hasWord := memo[w]; !hasWord {
            memo[w] = 1
        } else {
            memo[w]++
        }
    }
    
    // construct a min heap 
    var h minHeap = []item{}
    
    // init the heap
    heap.Init(&h)  
    
    for word, freq := range memo {
        i := item{word, freq}
        heap.Push(&h, i)
    }
    
    var ans []string
    for i := 0; i < k; i++{
        ans = append(ans, heap.Pop(&h).(item).word)
    }
    return ans
}


type item struct {
    word string
    freq int
}

type minHeap []item

func (h minHeap) Len() int { 
    return len(h) 
}

func (h minHeap) Less(i, j int) bool {
    if h[i].freq > h[j].freq {
        return true
    } else if h[i].freq == h[j].freq {
        if h[i].word < h[j].word {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

func (h minHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}

func (h *minHeap) Push(x interface{}) {
    item := x.(item)
    *h = append(*h, item)
}

func (h *minHeap) Pop() interface{} {
    old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
