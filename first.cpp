#include <vector>
#include<iostream>
#include<bits/stdc++.h>
using namespace std;

class Solution {
public:
    // Line 7 from your first image:
vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> ans;
        int n = nums.size();

        sort(nums.begin(), nums.end());

        for (int i = 0; i < n - 3; i++) {

            // Skip duplicate first elements
            if (i > 0 && nums[i] == nums[i - 1])
                continue;

            for (int j = i + 1; j < n - 2; j++) {

                // Skip duplicate second elements
                if (j > i + 1 && nums[j] == nums[j - 1])
                    continue;

                int left = j + 1;
                int right = n - 1;

                while (left < right) {

                    long long sum = (long long)nums[i] +
                                    nums[j] +
                                    nums[left] +
                                    nums[right];

                    if (sum == target) {

                        ans.push_back({nums[i], nums[j], nums[left], nums[right]});

                        left++;
                        right--;

                        // Skip duplicates
                        while (left < right && nums[left] == nums[left - 1])
                            left++;

                        while (left < right && nums[right] == nums[right + 1])
                            right--;

                    }
                    else if (sum < target) {
                        left++;
                    }
                    else {
                        right--;
                    }
                }
            }
        }

        return ans;
    }
};
int main() {
    Solution solver;
    std::vector<int> nums = {1, 0, -1, 0, -2, 2};
    int target = 0;
    
    // Call your function to test it
    std::vector<std::vector<int>> result = solver.fourSum(nums, target);
    
    std::cout << "Compiled and ran successfully! Found " << result.size() << " triplets/quadruplets." << std::endl;
    return 0;
}