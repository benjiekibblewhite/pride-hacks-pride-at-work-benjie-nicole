<template>
  <div class="home container is-fluid">
    <img src="../assets/bg_becomeAPartner.jpg" >
    <section>
      <p><strong class="is-pride">Welcome to Pride at Work Canada’s Partnership Program!</strong> By
  completing the Index Survey each year, your organization plays an integral role in
  supporting Pride at Work Canada’s mission to empower organizations to foster a
  workplace culture that recognizes LGBTQ2+ employees as an important part of a diverse
  workforce through dialogue, education and leadership.</p>
  <p>The Index Survey consists of <strong class="is-pride">35-40 questions</strong>, which are divided into <strong class="is-pride">eight themes</strong>:</p>
  <ol>
    <li>Anti-discrimination and Harassment policies</li>
    <li>Employee Resource Groups</li>
    <li>Onboarding and Complaints Processes</li>
    <li>Benefits Coverage</li>
    <li>Training Topics</li>
    <li>Supplier Diversity</li>
    <li>Community Involvement</li>
    <li>Manager Support</li>
  </ol>
  <p>The results of the Index Survey are analyzed and summarized in a Report that will be
uploaded to your Dashboard. The Report will include your organization’s Workplace
Index Score, highlighting strengths and recommendations for areas of improvement.
You will be able to view this year’s Report, in comparison to previous years, in the
Dashboard.</p>
<p>Pride at Work Canada considers your confidentiality and privacy very seriously. For more
information on our policies, please click <strong class='is-pride'>here</strong>.</p>
<p>To begin the Index Survey, please click <strong class='is-pride'>here</strong>.</p>
<p><strong class='is-pride'>Thank you for your participation!</strong></p>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',

}
</script>

<style scoped>
  section {
    max-width: 600px;
    margin: 40px auto;
  }

  strong.is-pride {
    color: #92278f;
  }

  p, ol {
    margin-bottom: 16px;
  }

  ol {
    margin-left: 32px;
  }
</style>
