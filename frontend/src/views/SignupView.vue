<template>
  <div class="container is-max-desktop">
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Job</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Country</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">City</label>
      <div class="control">
        <input class="input" type="text" />
      </div>
    </div>

    <div class="field">
      <label class="label">Gender</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupView",
  props: {},
};
</script>

<style scoped></style>
