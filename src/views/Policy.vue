<template>
  <div class="home container is-fluid">
    <div class="survey-head">
      <div class="theme-title-holder"><i class="fas fa-book"></i>
        <h1 class="title">Anti-discrimination and Harassment policies</h1></div>
      <p class='sub-title'>At any point, you may save your progress, and you will be returned to the Survey Summary. You may return at any time to continue your progress.</p>
      <p class="sub-title">Depending on your responses to the survey questions, you may be prompted to provide supporting documentation. You can upload those documents on this page, or you can visit the "Documentation" page to see all required documents, and review your previously submitted documentation.</p>
    </div>
        <section>
          <div class="field save">
            <p class="control">
              <a class="button is-pride">
                Save Progress
              </a>
            </p>
          </div>
          <label class="label is-medium  question">Which of the following has your organization put in place to foster an inclusive workplace for lesbian, gay, bisexual, trans, queer, and two-spirit (LGBTQ2+) employees? Select all that apply.</label>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Organization-wide policy that bars discrimination based on, and specifically refers to, sexual orientation
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Organization-wide policy that bars discrimination based on, and specifically refers to, gender identity and/or expression
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Strategies linking diversity and inclusion for LGBT employees to your organization’s aims and values (this is not the same as having an employment equity strategy)
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  An action plan to deliver that strategy with identifiable objectives and milestones to be achieved
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Any of the above policies, strategies and/or action plan reviewed at Executive Leadership Team level
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  We do not have any of the above in place
                </label>
              </div>
            </div>
          </div>
          <p class="request">Please provide us with any documentation that describes your policies, action plans, or strategies. You can upload this now, or you do it later by visiting the "Documents" page through the menu at the top of your screen.</p>
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
              <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Created, or fostered creating, a positive space through safe space campaigns
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Assigned gender-neutral washrooms with gender segregated washrooms
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Agendas for organizational goal setting includes topics of discussion or actions that specifically address LGBTQ2+ issues of inclusion
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  You record and measure the effectiveness and understanding of the policies and actions on your employees and your environment
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                 We do not have any of the above in place
                </label>
              </div>
            </div>
          </div>

           <label class="label is-medium  question">Does your organization make it clear that they will support an employee if they choose to <span class="definition">transition</span><div class="defined">Transitioning is the process of changing one's gender presentation and/or sex characteristics to accord with one's internal sense of gender identity – the idea of what it means to be a man or a woman, or genderqueer (in-between).</div>? Select all that apply.</label>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Yes, we have documented processes and supporting guidelines in place to assist someone transitioning
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
              <input type="checkbox">
              <div class="control">
                <label class="checkbox">
                  Yes, we have current employees with experience in assisting someone transitioning
                </label>
              </div>
            </div>
          </div>
          <div class="field-body answer">
            <div class="field is-horizontal">
                  <input type="checkbox">
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
  name: 'survey',

  methods: {
    showDefinition() {
      console.log(this);
    }
  }

}
</script>

<style scoped>
    section, .buttons {
        max-width: 600px;
        margin: 40px auto;
    }

.theme-title-holder {
      display: flex;
      align-items: center;
      color:#92278f;
      margin-left: -32px;
      margin-bottom: 24px;
    }
    .theme-title-holder svg {
        font-size: 24px;
    }
    .title {
      margin-left: 16px;
      color:#92278f;
    }


    .survey-head {
      max-width: 700px;
      margin: 40px auto;
    }

    .sub-title {
      margin-bottom: 8px;
    }

    .button.is-pride {
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

  .field input {
    margin-right: 24px;
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
