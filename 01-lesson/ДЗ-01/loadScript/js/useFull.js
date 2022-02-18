/* loadScript('js/a.js', () => {
  console.log('from useFull =', a)

  loadScript('js/b.js', () => {
    console.log('Result summ = 12 ', a + b)
  })
}) */

loadScript(['js/a.js', 'js/b.js'], (el) => {
  console.log('from useFull =', el)
});
