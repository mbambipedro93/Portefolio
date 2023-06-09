<?php
        if (isset($_POST['submit'])) {
            $to = 'benjamin.mbambi-pedro@epitech.eu';
            $subject = 'Envoi depuis la page Contact';
            $message = $_POST['message'];
            $headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'];
            $retour = mail($to, $subject, $message, $headers);
            if ($retour)
                echo '<p>Votre message a bien été envoyé.</p>';
        }
        ?>