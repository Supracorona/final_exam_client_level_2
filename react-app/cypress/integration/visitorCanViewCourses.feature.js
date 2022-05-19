describe('Visitor can visit application and see all courses', () => {
  


  before(() => {
    cy.intercept("GET", "**/data/courses.json", {fixture: "courseListResponse.json"}).as("coursesList");
    cy.visit("/");
  });



  it("is expected to receive collection of courses", () => {

  });



  it("is expected to see header", () => {

  });



  describe('Visitor can see navigation with course section names', () => {

    it("is expected to see Workshops navigation", () => {

    });

    it("is expected to see Testing navigation", () => {

    });

    it("is expected to see Vue navigation", () => {

    });

    it("is expected to see Productivity navigation", () => {

    });

    it("is expected to see Node navigation", () => {

    });

    it("is expected to see React navigation", () => {

    });

  });



  describe('Visitor can see first two courses present', () => {
    
    it("is expected to see Work The Web course section", () => {

    });

    it("is expected to see Test Automation course section", () => {

    });

  });



});