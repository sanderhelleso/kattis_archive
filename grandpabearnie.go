package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strings"
    "strconv"
    "sort"
)

// utils to handle i/o *******************************/

var reader = bufio.NewReaderSize(os.Stdin, 16*1024*1024)

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func getN() int {
    var n int
    _, _ = fmt.Scanf("%d", &n)
    return n
}

func strToInt(s string) int {
    n, _ := strconv.Atoi(s)
   return n
}

/***************************************************/

func main() {
    
    trips := make(map[string][]int)
    
    cases := getN();
    for cases > 0 {
        s := strings.Split(readLine(reader), " ")
        t, y := s[0], strToInt(s[1])
        
        if _, ok := trips[t]; ok {
            trips[t] = append(trips[t], y)    
        } else {
            trips[t] = make([]int, 0)
            trips[t] = append(trips[t], y)
        }
        cases--
    }
    
    for _, v := range trips {
        sort.Ints(v)
    }
    
    qs := strToInt(readLine(reader))
    for qs > 0 {
        q := strings.Split(readLine(reader), " ")
        fmt.Println(trips[q[0]][strToInt(q[1]) - 1])
        qs--
    }
}    
  
