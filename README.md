# Quicksort

The principle of the quicksort algorithm is this:

Pick a “pivot” element.
- “Partition” the array into 3 parts:
  - First part: all elements in this part is less than the pivot.
  - Second part: the pivot itself (only one element!)
  - Third part: all elements in this part is greater than or equal to the pivot.
- Then, apply the quicksort algorithm to the first and the third part. (recursively)
