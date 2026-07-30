implement queue using stacks in c++
#include <iostream>
#include <stack>    
using namespace std;    
class QueueUsingStacks {
    stack<int> s1, s2;  
    public:
        void enqueue(int x);
        int dequeue();
}; 
int QueueUsingStacks::dequeue() {
    if (s1.empty() && s2.empty()) {
        cout << "Queue is empty" << endl;
        return -1;
    }
    if (s2.empty()) {
        while (!s1.empty()) {
            s2.push(s1.top());
            s1.pop();
        }
    }
    int x = s2.top();
    s2.pop();
    return x;
}
 
