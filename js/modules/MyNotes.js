import $ from 'jquery';

class MyNotes {
    constructor(){
this.events();
    }

    events(){
        $(".delete-note").on("click", this.deleteNote)
    }

    //methods
   deleteNote(e){
       var thisNote = $(e.target).parents("li");
        $.ajax({
            beforeSend: (xhr) => {
                xhr.setRequestHeader('X-WP-Nonce', universityData.nonce);
            },
            url: universityData.root_url + '/wp-json/wp/v2/note/' + thisNote.data('id'),
            type: 'DELETE',
            success:(response)=>{
                thisNote.slideUp();
                console.log('sucess'),
                console.log(response)
            },
            error:(response)=>{
                console.log('Oops'),
                console.log(response)
            }
        });
    }
}
export default MyNotes;