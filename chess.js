$(document).on('click','.btn-print',function(){
    // Getting values from user
    rank = Number($('.rank').val())+2;
    file = Number($('.file').val())+2;        
    color1 = $('#color1').val();
    color2 = $('#color2').val();

    // Creating Main Chess pieces fa-icons as array
    chess_main_pcs = ['fa-chess-rook','fa-chess-knight','fa-chess-bishop','fa-chess-queen','fa-chess-king','fa-chess-bishop','fa-chess-knight','fa-chess-rook'];        

    // variable used to store all content
    content = '';

    // Checks row and column not empty
    if(rank != '' && file != '')
    {
        // Creating rows
        for(i = 0; i < rank; i++)
        {
            content += '<tr>';
            // Creating Column
            for(j = 0; j < file; j++)
            {

                // Condition for cell color
                if((i % 2 === 0) && (j % 2 === 0))
                {
                    cell_color = 'color1';
                }
                else if ((i % 2 === 0) && (j % 2 !== 0))
                {
                    cell_color = 'color2';
                }
                else if ((i % 2 !== 0) && (j % 2 === 0))
                {
                    cell_color = 'color2';
                }
                else if ((i % 2 !== 0) && (j % 2 !== 0))
                {
                    cell_color = 'color1';
                }

                // contition to show row and column name
                if(((i == 0) || (i == (rank-1))) || ((j == 0) || (j == (file-1))))
                {
                    cell_color = 'cell_name';                        
                }

                cell_class_name = '';

                // Cell data contition
                if(j == 0 && (i > 0 && i != (rank-1)))
                {
                    cell_name = (rank-1)-i;                        
                }
                else
                {
                    cell_name = '';
                    if(((j > 0) && (j != (file-1))) && (i == (rank-1)))
                    {
                        cell_name = String.fromCharCode(64+j);
                    }
                    else if((j>0) && (i>0) && (j != (file-1)))
                    {
                        cell_class_name = ((rank-1)-i)+''+(j);

                        if((rank == 10) && (file == 10))
                        {
                            if((cell_class_name >= 71) && (cell_class_name <= 78))
                            {
                                cell_name = '<i class="fa fa-chess-pawn"></i>';
                            }

                            if((cell_class_name >= 81) && (cell_class_name <= 88))
                            {
                                cell_name = '<i class="fa '+chess_main_pcs[j-1]+'"></i>';
                            }

                            if((cell_class_name >= 21) && (cell_class_name <= 28))
                            {
                                cell_name = '<i class="fa fa-chess-pawn text-white"></i>';
                            }

                            if((cell_class_name >= 11) && (cell_class_name <= 18))
                            {
                                cell_name = '<i class="fa '+chess_main_pcs[j-1]+' text-white"></i>';
                            }
                        }
                    }
                }
               
                content += '<td class="'+cell_color+' '+cell_class_name+'">'+cell_name+'</td>';                    
            }
            content += '</tr>';
        }
        // console.log(content);
        $('table').html(content);
        $(".color1").css("background-color",color1);
        $(".color2").css("background-color",color2);               
    }
});

// Function change color
$(document).on('change','#color1,#color2',function(){
    color1 = $('#color1').val();
    color2 = $('#color2').val();
    $(".color1").css("background-color",color1);
    $(".color2").css("background-color",color2);
});

// Trigger print-btn click onload
$(document).ready(function(){
    $(".btn-print").trigger("click");
});