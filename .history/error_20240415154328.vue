template(lang="pug")
  | .error
  | pre {{ error }}
script(setup="" lang="ts").
  defineProps({
  error: Object,
  });