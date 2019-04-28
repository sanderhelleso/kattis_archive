#include <stdio.h>
#include <iostream>
#include <map>

using namespace std;

int main() {
    
    int total = 0;
    string s;
    
    map<string, int> speecies;
    
    while(getline(cin, s)) {
        speecies[s]++;
        total++;
    }
    
    map<string, int>::iterator it;
    for (it = speecies.begin(); it != speecies.end(); it++) {
        cout << it->first;
        printf(" %.4f\n", it->second * 1.0 / total * 100);
    }
}
