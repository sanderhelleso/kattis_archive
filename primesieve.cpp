#include <iostream>
#include <cstring>
#include <vector>
#include <bitset>
using namespace std;

#define N 100000010

bitset<N> pp;
int x;

void init(){
	for (int i = 2; i < 10011; i++){
		if (pp[i]) {
			x = 2*i;
			while (x < N){
				pp[x] = 0;
				x += i;
			}
		}
	}
}

int sum(int n){
	int t = 0;
	for (int i = 2; i <= n; i++) {
	    if (pp[i]) t++;
	}
	
	return t;
}

int main(){
	int n, q, a;
	pp.flip();
	
	init();
	pp[1] = 0;
	
	cin >> n >> q;
	cout << sum(n) << endl;
	
	while (q--){
		cin >> a;
		cout << pp[a] << endl;
	}
	return 0;
}
