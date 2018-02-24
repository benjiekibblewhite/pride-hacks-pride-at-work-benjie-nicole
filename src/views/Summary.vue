<template>
  <div class="home container is-fluid">
    <div class="survey-head">
      <h1 class="title">Summary</h1>
      <p class='sub-title'>On this page you can review all of your answers to the Index Survey. </p>
      <p class="sub-title">Depending on your responses to the survey questions, you may be prompted to provide supporting documentation. You can upload those documents on this page, or you can visit the "Documentation" page to see all required documents, and review your previously submitted documentation.</p>
    </div>
        <section>
          <label class="label is-medium  question">Which of the following has your organization put in place to foster an inclusive workplace for lesbian, gay, bisexual, trans, queer, and two-spirit (LGBTQ2+) employees? Select all that apply.</label>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <i class="fas fa-check checkmark"></i>
              <div class="control">
                <label class="checkbox">
                  Organization-wide policy that bars discrimination based on, and specifically refers to, sexual orientation
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <i class="fas fa-check checkmark"></i>
              <div class="control">
                <label class="checkbox">
                  Organization-wide policy that bars discrimination based on, and specifically refers to, gender identity and/or expression
                </label>
              </div>
            </div>
          </div>
          <p class="request">Please provide us with any documentation that describes your policies, action plans, or strategies. You can upload this now, or you do it later by visiting the "Documentation" page through the menu at the top of your screen.</p>
          <div class="file">
            <label class="file-label">
              <input class="file-input" type="file" name="resume">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>

        <div class="submitteddoc field is-grouped"><i class="far fa-file"></i> Discrimination_Policy.pdf
          <p class="control">
            <a class="button is-danger">
              Delete
            </a>
          </p>
        </div>
          <label class="label is-medium question">Which of the following has your organization put in place to visibly demonstrate your policies supporting safe LGBTQ2+ environments? Select all that apply.</label>

          <div class="field-body answer">
            <div class="field is-horizontal">
              <i class="fas fa-check checkmark"></i>
              <div class="control">
                <label class="checkbox">
                  Agendas for organizational goal setting includes topics of discussion or actions that specifically address LGBTQ2+ issues of inclusion
                </label>
              </div>
            </div>
          </div>
           <label class="label is-medium  question">Does your organization make it clear that they will support an employee if they choose to transition? Select all that apply.</label>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <i class="fas fa-check checkmark"></i>
              <div class="control">
                <label class="checkbox">
                  No, we do not have any experience or documented policies/processes in assisting employees to transition
                </label>
              </div>
            </div>
          </div>
        </section>
<div class="field is-grouped buttons">
  <p class="control">
    <a class="button is-pride">
      Submit
    </a>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'summary',

  methods: {

  }

}
</script>

<style scoped>
    section, .buttons {
        max-width: 600px;
        margin: 40px auto;
    }



    .survey-head {
      max-width: 700px;
      margin: 40px auto;
    }

    .sub-title {
      margin-bottom: 8px;
    }

    .is-pride {
      background-color: #92278f;
      color: white;
      font-weight: bold;
    }

    .question {
      margin: 24px 0;
    }

    .submitteddoc {
      color: #92278f;
      font-weight: bold;
      margin: 16px;
      display: flex;
      align-items: center;
      width: 300px;
      justify-content: space-between;
    }

    .request {
      margin-bottom: 16px;
    }

  .answer {
    margin: 0 0 16px 32px;
  }

  .save {
    position: fixed;
    right: 48px;
    top: 120px;
    }

  .checkmark {
    margin-right: 24px;
    color: hsl(141, 71%, 48%);
    font-size: 24px;
  }

  .definition {
    background: #fff896;
    padding: 2px;
    border-radius: 2px;
    cursor: pointer;
  }

  .defined {
    position: absolute;
    font-size: 14px;
    font-weight: normal;
    width: 200px;
    background-color: white;
    z-index: 2;
    border: 1px grey solid;
    border-radius: 2px;
    right: 470px;
    padding: 10px;
  }

</style>
